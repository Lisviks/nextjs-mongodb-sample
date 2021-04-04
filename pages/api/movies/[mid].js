import { ObjectID } from 'mongodb';
import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { mid } = req.query;

  const movie = await db.collection('movies').findOne({ _id: ObjectID(mid) });

  res.json(movie);
};
