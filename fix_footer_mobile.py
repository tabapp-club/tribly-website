#!/usr/bin/env python3
import glob

# Get all industry page files
files = glob.glob("/Users/aditya/Documents/tribly-website/app/industry/*/page.tsx")

for filepath in files:
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line contains just <Footer /> (possibly with whitespace)
        if '<Footer />' in line and '</main>' not in line:
            # Get the indentation
            indent = len(line) - len(line.lstrip())
            spaces = ' ' * indent
            
            # Replace with responsive version
            new_lines.append(f'{spaces}      {{/* Desktop Footer */}}\n')
            new_lines.append(f'{spaces}    <div className="hidden md:block">\n')
            new_lines.append(f'{spaces}      <Footer />\n')
            new_lines.append(f'{spaces}    </div>\n')
            new_lines.append(f'{spaces}\n')
            new_lines.append(f'{spaces}    {{/* Mobile Footer */}}\n')
            new_lines.append(f'{spaces}    <div className="block md:hidden">\n')
            new_lines.append(f'{spaces}      <FooterMobile />\n')
            new_lines.append(f'{spaces}    </div>\n')
            i += 1
        else:
            new_lines.append(line)
            i += 1
    
    with open(filepath, 'w') as f:
        f.writelines(new_lines)

print("\nDone! All Footer components replaced with responsive versions.")

