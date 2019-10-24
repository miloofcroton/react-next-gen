import { NextApiRequest, NextApiResponse } from 'next';
import { mockUsers } from 'services/users/data/mocks';

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(mockUsers)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(mockUsers);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
