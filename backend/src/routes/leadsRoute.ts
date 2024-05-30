import { Router, Request, Response } from "express";
import Lead from "../models/leadModel";
import { sendEmail } from "../services/emailService";

const router = Router();

// Create a new lead
router.post("/", async (req: Request, res: Response) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to create lead",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});

// Get all leads
router.get("/", async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to fetch leads",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});

// Get lead by Id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }
    res.status(200).json(lead);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to get lead",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});
// Update a lead
router.put("/:leadId", async (req: Request, res: Response) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.leadId, req.body, {
      new: true,
    });
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }
    res.status(200).json(lead);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to update lead",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});

// Delete a lead
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }
    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to delete lead",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});

// Send email to a lead
router.post("/send-email", async (req: Request, res: Response) => {
  const { email, subject, message } = req.body;

  try {
    const response = await sendEmail(email, subject, message);
    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error",
      });
  }
});

export default router;
