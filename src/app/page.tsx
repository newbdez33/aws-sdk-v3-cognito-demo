'use client';
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export default function Home() {
  const login = async () => {
    const client = new CognitoIdentityProviderClient({ region: "ap-northeast-1"});
    const command = new InitiateAuthCommand({
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
      AuthParameters: {
        USERNAME: "test3",
        PASSWORD: "Aa@1234567",
      },
      ClientId: "49vc82dntr273p3hs4aru131a7",
    });

    var result = await client.send(command);
    console.log(result);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <button onClick={login}>Login</button>
      </div>
    </main>
  );
}
