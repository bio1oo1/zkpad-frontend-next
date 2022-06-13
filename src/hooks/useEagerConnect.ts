import { useStarknetReact } from "@web3-starknet-react/core";
import { useEffect, useState } from "react";
import { argentXConnector } from "../connectors";

export default function useEagerConnect() {
	const { activate, active } = useStarknetReact();

	const [tried, setTried] = useState(false);

	useEffect(() => {
		argentXConnector.isAuthorized().then((isAuthorized: any) => {
			if (isAuthorized) {
				activate(argentXConnector, undefined, true).catch(() => {
					setTried(true);
				});
			} else {
				setTried(true);
			}
		});
	}, [activate]);

	// if the connection worked, wait until we get confirmation of that to flip the flag
	useEffect(() => {
		if (!tried && active) {
			setTried(true);
		}
	}, [tried, active]);

	return tried;
}
