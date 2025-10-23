#!/usr/bin/env python3
import re
import glob

# Get all industry page files except dermatology
files = glob.glob("/Users/aditya/Documents/tribly-website/app/industry/*/page.tsx")
files = [f for f in files if "dermatology-aesthetic-clinics" not in f]

for filepath in files:
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    cleaned_lines = []
    for i, line in enumerate(lines):
        # Skip lines that are just whitespace with a single }
        if re.match(r'^\s+\}\s*$', line):
            # Check if the next line has content (not just closing braces)
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                # If next line has className or other props, this is an artifact
                if 'className=' in next_line or 'key=' in next_line:
                    continue  # Skip this orphaned brace line
        cleaned_lines.append(line)
    
    with open(filepath, 'w') as f:
        f.writelines(cleaned_lines)

print("\nDone! Final cleanup complete.")

