#!/bin/sh
mkdir -p tmp/addon/
cp -a update_script tmp/
cp -a rc.d tmp/
cp -a www tmp/
cp -a VERSION tmp/addon/
cd tmp
chmod +x update_script

[ -f /usr/sbin/dot_clean ] && dot_clean .

COPYFILE_DISABLE=1 tar --owner=root --group=root --exclude=.DS_Store -czvf ../hm-print-$(cat ../VERSION).tar.gz *

cd ..
rm -rf tmp
