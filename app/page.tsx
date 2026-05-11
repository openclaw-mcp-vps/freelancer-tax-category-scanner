export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            For Freelancers &amp; Consultants
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Auto-Categorize Your Business Expenses
          </h1>
          <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
            Connect your bank account and let AI scan every transaction, tag deductible expenses, and export a clean report for tax season — in minutes.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Start for $19/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>
        </section>

        {/* Feature pills */}
        <section className="flex flex-wrap justify-center gap-3 mb-20">
          {["Plaid Bank Integration", "AI Expense Tagging", "Tax-Ready CSV Export", "IRS Category Mapping", "Real-Time Sync"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
          <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
            <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
            <p className="text-5xl font-bold text-white mb-1">$19</p>
            <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
            <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
              {[
                "Unlimited bank accounts via Plaid",
                "AI categorization of all transactions",
                "IRS Schedule C category mapping",
                "CSV &amp; PDF export for tax filing",
                "Real-time transaction sync",
                "Email support"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
              className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">How does the bank connection work?</h3>
              <p className="text-[#8b949e] text-sm">We use Plaid, the industry-standard bank API trusted by thousands of apps. Your credentials are never stored — Plaid handles authentication securely and we only receive read-only transaction data.</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">How accurate is the AI categorization?</h3>
              <p className="text-[#8b949e] text-sm">Our AI achieves over 90% accuracy on common freelancer expenses like software subscriptions, travel, meals, and home office costs. You can review and correct any category before exporting.</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-[#8b949e] text-sm">Yes. Cancel from your account dashboard at any time with no fees or penalties. You keep access until the end of your billing period.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-[#6e7681] border-t border-[#21262d] pt-8">
          <p>&copy; {new Date().getFullYear()} FreelancerTax. Built for independent workers.</p>
        </footer>
      </div>
    </main>
  );
}
