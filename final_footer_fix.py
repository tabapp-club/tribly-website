#!/usr/bin/env python3
import re
import glob

# Get all industry page files
files = glob.glob("/Users/aditya/Documents/tribly-website/app/industry/*/page.tsx")

for filepath in files:
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove any existing Footer responsive wrappers (to clean up duplicates)
    # Pattern: anything between "Desktop Footer" comment and closing </main>
    content = re.sub(
        r'\s*\{/\* Desktop Footer \*/\}.*?</main>',
        '\n\n      <Footer />\n    </main>',
        content,
        flags=re.DOTALL
    )
    
    # Now ensure FooterMobile import exists
    if 'import FooterMobile' not in content:
        content = content.replace(
            'import Footer from "@/components/Footer";',
            'import Footer from "@/components/Footer";\nimport FooterMobile from "@/components/mobile/FooterMobile";'
        )
    
    # Now replace single Footer with responsive version
    content = re.sub(
        r'(\s+)<Footer />\n(\s+)</main>',
        r'\1{/* Desktop Footer */}\n\1<div className="hidden md:block">\n\1  <Footer />\n\1</div>\n\n\1{/* Mobile Footer */}\n\1<div className="block md:hidden">\n\1  <FooterMobile />\n\1</div>\n\2</main>',
        content
    )
    
    with open(filepath, 'w') as f:
        f.write(content)

print("\nDone! All pages now have proper responsive Footer.")

