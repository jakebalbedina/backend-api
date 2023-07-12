import { Request, Response } from 'express';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    const user = response.data;
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = req.body;
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, user);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await axios.delete(`${API_URL}/users/${id}`);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
