/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import CostComparison from './components/CostComparison';
import WorkflowSection from './components/WorkflowSection';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function App() {
  return (
    <main className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 antialiased">
      <Hero />
      <PainPoints />
      <Solution />
      <CostComparison />
      <WorkflowSection />
      <FAQ />
      <CTA />
      
      <footer className="py-8 text-center text-sm text-gray-400 bg-white border-t border-gray-100">
        <p>Built specifically for Susan Brager and The Brager Schaub Team.</p>
      </footer>
    </main>
  );
}
