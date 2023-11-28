import type { NextPage } from 'next';
import { SimpleDemo } from '@/components/demo/simple-demo';
import { GetUserDataDemo } from '@/components/demo/get-user-data-demo';
import { GetLoggingInStateDemo } from '@/components/demo/get-logging-in-state-demo';
import { GetLoginInfoDemo } from '@/components/demo/get-login-info-demo';
import { Authenticated } from '@/components/elven-ui/authenticated';
import { CardContent, Card } from '@/components/ui/card';
import { LoginModalButton } from '@/components/elven-ui/login-modal-button';

const step1: NextPage = () => {
  return (
    <>
    <div className="w-full flex  items-center justify-center overflow-hidden">
 
      <Card className="mb-4 w-[500px] flex items-center justify-center">
        <CardContent className="mt-6 flex-col items-center justify-center">
          <div className="mb-4">
           STEP 1:
          </div>
          <div className="mb-4">
          hahaha
          </div>
          <div className="mb-4">
          <LoginModalButton />
          </div>
         
         
        </CardContent>
      </Card>
     

      
      </div>
    </>
  );
};

export default step1;
