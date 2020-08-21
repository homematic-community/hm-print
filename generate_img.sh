#!/bin/sh
COPYFILE_DISABLE=1; export COPYFILE_DISABLE
rm -f *.tar.gz

mkdir -p tmp/addon/
cp -a update_script tmp/
cp -a rc.d tmp/
cp -a www tmp/
cp -a VERSION tmp/addon/
cd tmp
chmod +x update_script

find . -name ".DS_Store" -exec rm -rf {} \;
find . -name "._*" -exec rm -rf {} \;
dot_clean .

tar  -zcf ../hm-print-$(cat ../VERSION).tar.gz * 

cd ..
rm -rf tmp
