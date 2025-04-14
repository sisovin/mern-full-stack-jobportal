import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createJob = async (req: Request, res: Response) => {
  const { title, description, company, location, salary } = req.body;

  try {
    const job = await prisma.job.create({
      data: {
        title,
        description,
        company,
        location,
        salary,
      },
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const job = await prisma.job.findUnique({ where: { id: Number(id) } });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, company, location, salary } = req.body;

  try {
    const job = await prisma.job.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        company,
        location,
        salary,
      },
    });

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.job.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
