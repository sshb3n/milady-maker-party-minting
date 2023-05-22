import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";
import { SiweMessage } from "~/lib/utils/siwe.server";
import { ConnectWithSelect } from "~/components/ConnectWithSelect";
import { hooks, metaMask } from "~/lib/connectors/metaMask";
import EventEmitter from "~/lib/utils/eventemitter.server";
import { MintSection } from "~/components/MintSection";
import { Card } from "~/components/Card";
import { Status } from "~/components/Status";
import { Accounts } from "~/components/Accounts";
import { FaHome, FaUser, FaEnvelope, FaEthereum, FaShip, FaWater, FaTwitter } from 'react-icons/fa';



const openSeaUrl = 'https://opensea.io/';


const {
  useENSNames,
  useChainId,
  useIsActivating,
  useIsActive,
  useProvider,
  useAccounts,
} = hooks;

export const action: ActionFunction = async ({ request, context }) => {
  console.log("doing the action");
  const formData = await request.formData();
  console.log({ formData });
  const address = formData.get("address") as string;
  const statement = formData.get("statement") as string;
  // const project = await createProject(body);
  const EE = new EventEmitter();

  console.log({ EE });

  console.log({ context });

  try {
    const siweOptions = {
      domain: "localhost:4000",
      address,
      statement,
      uri: "https://localhost:4000/",
      version: "1",
      chainId: 1,
    };
    console.log({ siweOptions });
    const message = new SiweMessage(siweOptions);

    const preparedMessage = message.prepareMessage();
    console.log({ message });
    console.log(preparedMessage);
    return json({ message: preparedMessage });
  } catch (error) {
    console.log({ error });
    return json({ error });
  }
};

export default function Index() {
  const chainId = useChainId();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const accounts = useAccounts();
  const ENSNames = useENSNames();

  // console.log({
  //   chainId,
  //   accounts,
  //   isActivating,
  //   isActive,
  //   provider,
  //   ENSNames,
  //   signer,
  // })

  const [error, setError] = useState<Error>();

  useEffect(() => {
    console.log("eagerly connecting to MM");

    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);


  return (
    <>
      {/* <div className="absolute bottom-0 left-0">Logos</div> */}
      <div className="absolute top-0 left-0">
        <div className="mt-8 ml-8">
          <Status
            isActivating={isActivating}
            isActive={isActive}
            error={error}
          />
          <Accounts
            accounts={accounts}
            provider={provider}
            ENSNames={ENSNames}
          />

          {isActive ? (
            <button
              onClick={() => {
                if (metaMask?.deactivate) {
                  void metaMask.deactivate();
                } else {
                  void metaMask.resetState();
                }
                // setDesiredChainId(1);
              }}
              className="underline mt-3 tracking-wide"
            >
              Disconnect
            </button>
          ) : null}
        </div>

        {/* <Card
          connector={metaMask}
          activeChainId={chainId}
          isActivating={isActivating}
          isActive={isActive}
          error={error}
          chainIds={[1, 11155111]}
          setError={setError}
          accounts={accounts}
          provider={provider}
          ENSNames={ENSNames}
        /> */}
      </div>

      <div className="max-w-screen-2xl mx-auto h-screen flex flex-col items-center justify-center px-8 lg:px-0 relative">
        <div className="flex flex-col items-center justify-center">
        <div className="absolute bottom-0 right-10">
        <div className="mt-8 ml-8" style={{ color: 'purple', fontSize: '24px',position: 'fixed',
        left: '8px',
        bottom: '8px',}}>
          <h1>Powered by Scatter.Art</h1>
          
      </div>
    </div>

        <div className="absolute bottom-0 left-0">
        <div className="mt-8 ml-8" style={{position: 'fixed',
        left: '8px',
        bottom: '35px',}}>
          
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flexGrow: 1, overflowY: 'auto',}}>
        {/* Content that can scroll */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
        <a href="https://etherscan.io/address/0x05C63282c87f620aF5a658cBb53548257F3A6186">
          <FaEthereum size={48} color="purple"/>
        </a>
        <a href="https://opensea.io/" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <FaWater size={48} color="purple"/>
        </a>
        <a href="https://twitter.com/miladymakerprty">
          <FaTwitter size={48} color="purple"/>
        </a>
      </div>

    </div>
      
        </div>
      </div>
          <div className="max-w-3xl mx-auto">
            <img
              src="https://miladymakerparty.s3.us-east-2.amazonaws.com/logomint.webp"
              width="1037"
              height="172"
              alt="milady maker party"
            />
          </div>

          {/* <Form method="post">
            <input
              type="hidden"
              name="address"
              value={accounts ? accounts[0] : ""}
            />
            <input type="hidden" name="statement" value={statement} />
            <button type="submit" className="text-white">
              Sign In
            </button>
          </Form> */}

          <div className="w-72">
            <img
              src="https://miladymakerparty.s3.us-east-2.amazonaws.com/MainGif.gif"
              width="352"
              height="436"
              alt="milady maker party"
            />
          </div>

          {isActive ? (
            <div className="mt-2">
              <MintSection provider={provider} />
            </div>
            
          ) : (
            <div className="w-[360px] -mt-10">
              <ConnectWithSelect
                connector={metaMask}
                activeChainId={chainId}
                chainIds={[1, 11155111]}
                isActivating={isActivating}
                isActive={isActive}
                error={error}
                setError={setError}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
