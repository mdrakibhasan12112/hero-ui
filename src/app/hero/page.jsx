import { Button,Label,Input } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
 return (
   <div>
     <h2>Hero Page from hero ui</h2>
     <Button>Hero Button</Button>
     <Button variant="secondary">Hero Button</Button>
     <Button variant="outline">Hero Button</Button>
     <Button variant="danger">Hero Button</Button>

     <div className="flex w-80 flex-col gap-4">
       <div className="flex flex-col gap-1">
         <Label htmlFor="input-type-email">Email</Label>
         <Input
           id="input-type-email"
           placeholder="jane@example.com"
           type="email"
         />
       </div>
       <div className="flex flex-col gap-1">
         <Label htmlFor="input-type-number">Age</Label>
         <Input id="input-type-number" min={0} placeholder="30" type="number" />
       </div>
       <div className="flex flex-col gap-1">
         <Label htmlFor="input-type-password">Password</Label>
         <Input
           id="input-type-password"
           placeholder="••••••••"
           type="password"
         />
       </div>
     </div>
   </div>
 );
};

export default HeroPage;