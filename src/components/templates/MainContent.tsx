import React, { useState } from "react";
import { Tabs } from "../molecules/Tabs";
import { TabsContent } from "../molecules/TabsContent";
import { AboutUs } from "../organisms/AboutUs";
import { Service } from "../organisms/Services";
import { Contact } from "../organisms/Contact";
import { Lectoescritura } from "../organisms/Lectoescritura";
import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { Footer } from "../organisms/Footer";

export const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("sobre-nosotros");

  return (
    <div className="bg-[var(--color-light)] min-h-screen ">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <main className="py-0.5">
        <div className="w-full px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsContent value="sobre-nosotros">
              <section id="sobre-nosotros" >
                <AboutUs />
              </section>
            </TabsContent>
            <TabsContent value="servicios">
              <section id="servicios">
                <Service />
              </section>
            </TabsContent>
            <TabsContent value="letoescritura">
              <section id="letoescritura">
                <Lectoescritura />
              </section>
            </TabsContent>
            <TabsContent value="contactenos">
              <section id="contactenos">
                <Contact />
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};
