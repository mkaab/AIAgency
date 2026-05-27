export default function Privacy() {
    return (
        <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto min-h-[70vh]">
            <h1 className="font-display text-4xl font-bold text-brand-charcoal mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none text-brand-charcoal/80">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Introduction</h2>
                <p>Welcome to AltaServ. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                
                <h2>2. The Data We Collect About You</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
                
                <h2>3. How We Use Your Personal Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests (and your interests and fundamental rights do not override those interests), or where we need to comply with a legal or regulatory obligation.</p>
                
                <h2>4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed.</p>
                
                <h2>5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us.</p>
            </div>
        </div>
    )
}
