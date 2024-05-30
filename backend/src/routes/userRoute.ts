import express, { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = 'ASDFGHJKL!@#$%^&*asdfghjkl';

interface AuthenticatedRequest extends Request {
  user?: any;
}

// Register a new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const user = new User( req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});


// Get user details by _id
router.get('/:id', async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Middleware to protect routes
export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: 'Invalid token' });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export default router;
