import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';

import constate from 'constate';
import { useEndpoint } from './Settings';

export const [
  TaquitoProvider,
  useTezosToolkit
] = constate(
  () => {
    const endpoint = useEndpoint()
    const [taquito] = useState(() : { ttk : TezosToolkit } => ({
      ttk: new TezosToolkit(endpoint),
    }));
    return taquito;
  },
  (v) => v.ttk,
);

/*
USO

import { useTezosToolkit } from '../store/Taquito'

const ttk = useTezosToolkit()
const balance = await ttk.tz.getBalance('tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P');

*/