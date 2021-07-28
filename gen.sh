#!/bin/bash
for file in exports/*.svg
do
	rsvg-convert $file > $file.png
done
# qlmanage -t -s 1000 -o . picture.svg 