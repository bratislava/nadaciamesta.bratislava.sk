import { NextApiRequest, NextApiResponse } from 'next';
import { sendNewSubscriber } from '../../utils/email';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({});
    }

    await sendNewSubscriber(req.body.email, req.body.name);

    return res.status(200).json({});
  } catch (e) {
    console.error(e);
    return res.status(500).json({});
  }
};

export default handler;
