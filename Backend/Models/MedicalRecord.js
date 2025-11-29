import mongoose from "mongoose";
import medicationSchema from "./Medication.js";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },

    prescription: {
      type: [medicationSchema], 
      default: [],
    },

    visitDate: {
      type: Date,
      required: true,
    },

    nextVisitDate: {
      type: Date,
      default: null,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    attachments: [
      new mongoose.Schema(
        {
          fileName: String,
          fileUrl: String,
          uploadedAt: { type: Date, default: Date.now },
        },
        { _id: false }
      ),
    ],
  },
  { timestamps: true }
);

export default mongoose.model("MedicalRecord", medicalRecordSchema);
