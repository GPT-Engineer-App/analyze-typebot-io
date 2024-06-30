import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Typebot.io Clone</h1>
          <nav>
            <Button variant="outline" className="mr-2">Home</Button>
            <Button variant="outline" className="mr-2">Features</Button>
            <Button variant="outline" className="mr-2">Pricing</Button>
            <Button variant="outline">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to Typebot.io Clone</h2>
          <p className="text-lg mb-6">Create interactive conversational experiences with ease.</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </section>

        <section className="mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="feature1">
                <TabsList>
                  <TabsTrigger value="feature1">Feature 1</TabsTrigger>
                  <TabsTrigger value="feature2">Feature 2</TabsTrigger>
                  <TabsTrigger value="feature3">Feature 3</TabsTrigger>
                </TabsList>
                <TabsContent value="feature1">
                  <p>Feature 1 content goes here.</p>
                </TabsContent>
                <TabsContent value="feature2">
                  <p>Feature 2 content goes here.</p>
                </TabsContent>
                <TabsContent value="feature3">
                  <p>Feature 3 content goes here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes. You can customize it as per your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it free to use?</AccordionTrigger>
              <AccordionContent>
                Yes. It is free for personal and commercial use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip content.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>

        <section className="mb-10">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge variant="outline">Badge</Badge>
          </div>
        </section>

        <Separator className="my-10" />

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">Feel free to reach out for any queries.</p>
          <Button variant="primary">Contact Support</Button>
        </section>
      </main>

      <footer className="w-full bg-white shadow py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Typebot.io Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;