import os

root_dir = r"C:\Users\İsmail\Desktop\DORUK SÖVE KURUMSAL\DORUK SÖVE ÜRÜNLER"

def list_files(startpath):
    for root, dirs, files in os.walk(startpath):
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        print(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f'{subindent}{f}')

if os.path.exists(root_dir):
    list_files(root_dir)
else:
    print(f"Directory not found: {root_dir}")
