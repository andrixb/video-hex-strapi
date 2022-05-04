import type { NextApiRequest, NextApiResponse } from 'next';
import communitiesJSON from '../../src/Shared/infrastructure/mocks/data/communities.json';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.status(200).json(communitiesJSON);
}
