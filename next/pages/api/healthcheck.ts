import type { NextApiRequest, NextApiResponse } from 'next'

// Liveness/readiness probe for the cluster; no upstream calls.
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ status: 'ok' })
}

export default handler
