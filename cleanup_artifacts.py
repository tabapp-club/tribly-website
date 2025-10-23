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
    
    # Remove orphaned } } patterns
    content = re.sub(r' \} \} \}+', '', content)
    content = re.sub(r' \} \}', '', content)
    
    # Clean up excessive spaces
    content = re.sub(r' {2,}', ' ', content)
    
    # Fix div/button opening tags that might have lost proper spacing
    content = re.sub(r'<div\s+\n', '<div\n', content)
    content = re.sub(r'<button\s+\n', '<button\n', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

print("\nDone! Cleaned up artifacts from all industry pages.")

