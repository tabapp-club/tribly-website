#!/usr/bin/env python3
import re
import glob

# Get all industry page files
files = glob.glob("/Users/aditya/Documents/tribly-website/app/industry/*/page.tsx")

for filepath in files:
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Step 1: Add FooterMobile import after Footer import
    if 'import FooterMobile from "@/components/mobile/FooterMobile";' not in content:
        content = content.replace(
            'import Footer from "@/components/Footer";',
            'import Footer from "@/components/Footer";\nimport FooterMobile from "@/components/mobile/FooterMobile";'
        )
    
    # Step 2: Find the main element and its content
    # We need to wrap everything between <main> and </main> except Navbar
    # Pattern: Find <main...><Navbar />...content...<Footer /></main>
    
    # Replace the Footer section at the end
    # Find: <Footer /></main>
    # Replace with responsive version
    if '<Footer />\n    </main>' in content or '<Footer />\n      </main>' in content:
        # Replace with responsive version
        content = re.sub(
            r'<Footer />\n(\s+)</main>',
            r'      {/* Desktop Footer */}\n\1    <div className="hidden md:block">\n\1      <Footer />\n\1    </div>\n\n\1    {/* Mobile Footer */}\n\1    <div className="block md:hidden">\n\1      <FooterMobile />\n\1    </div>\n\1  </main>',
            content
        )
    
    with open(filepath, 'w') as f:
        f.write(content)

print("\nDone! All industry pages now use responsive Footer.")

