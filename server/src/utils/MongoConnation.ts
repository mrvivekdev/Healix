import mongoose from 'mongoose'

export default async function connectToDatabase(DbUrl: string): Promise<any> {
  try {
    const DBCONNATION = await mongoose.connect(DbUrl)
    return DBCONNATION 

  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}