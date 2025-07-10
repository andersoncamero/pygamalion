import React, { useState } from "react";
import { Tabs } from "./UI/Tabs";
import { TabsContent } from "./UI/TabsContent";
import { AboutUs } from "./sections/AboutUs";
import { Service } from "./sections/Services";
import { Contact } from "./sections/contact";
import { Header } from "./layout/Header";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Footer } from "./layout/Footer";

export const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("nosotros");

  return (
    <div className="bg-[var(--color-light)] min-h-screen ">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <Stats />
      <main className="py-32">
        <div className="container mx-auto px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsContent value="nosotros">
              <section id="nosotros" >
                <AboutUs />
              </section>
            </TabsContent>
            <TabsContent value="Servicios">
              <section id="Servicios">
                <Service />
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
