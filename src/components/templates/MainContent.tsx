import React, { Suspense, lazy } from "react";
import { Tabs } from "../molecules/Tabs";
import { TabsContent } from "../molecules/TabsContent";
import { Header } from "../organisms/Header";
import { UIProvider, useUI } from "../../context/UIContext";

// Lazy loading de componentes pesados
const Hero = lazy(() => import("../organisms/Hero").then(m => ({ default: m.Hero })));
const AboutUs = lazy(() => import("../organisms/AboutUs").then(m => ({ default: m.AboutUs })));
const Service = lazy(() => import("../organisms/Services").then(m => ({ default: m.Service })));
const Contact = lazy(() => import("../organisms/Contact").then(m => ({ default: m.Contact })));
const Lectoescritura = lazy(() => import("../organisms/Lectoescritura").then(m => ({ default: m.Lectoescritura })));
const Footer = lazy(() => import("../organisms/Footer").then(m => ({ default: m.Footer })));

const LoadingSection = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary)]"></div>
  </div>
);

const MainContentInner: React.FC = () => {
  const { activeTab, setActiveTab } = useUI();

  return (
    <div className="bg-[var(--color-light)] min-h-screen ">
      <Header />
      <Suspense fallback={<LoadingSection />}>
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
      </Suspense>
    </div>
  );
};

export const MainContent: React.FC = () => (
  <UIProvider>
    <MainContentInner />
  </UIProvider>
);
