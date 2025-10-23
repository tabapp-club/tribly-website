#!/usr/bin/env python3
import re
import glob

# Get all industry page files except dermatology
files = glob.glob("/Users/aditya/Documents/tribly-website/app/industry/*/page.tsx")
files = [f for f in files if "dermatology-aesthetic-clinics" not in f]

for filepath in files:
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove animation props (single line or multi-line)
    # Remove initial prop
    content = re.sub(r'\s*initial=\{[^}]+\}\s*', ' ', content)
    # Remove animate prop
    content = re.sub(r'\s*animate=\{[^}]+\}\s*', ' ', content)
    # Remove transition prop
    content = re.sub(r'\s*transition=\{[^}]+\}\s*', ' ', content)
    # Remove whileInView prop
    content = re.sub(r'\s*whileInView=\{[^}]+\}\s*', ' ', content)
    # Remove viewport prop
    content = re.sub(r'\s*viewport=\{[^}]+\}\s*', ' ', content)
    # Remove whileHover prop
    content = re.sub(r'\s*whileHover=\{[^}]+\}\s*', ' ', content)
    # Remove whileTap prop
    content = re.sub(r'\s*whileTap=\{[^}]+\}\s*', ' ', content)
    
    # Clean up extra spaces
    content = re.sub(r' +', ' ', content)
    content = re.sub(r' \n', '\n', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

print("\nDone! All animation props removed from industry pages.")

