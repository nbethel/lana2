#!/usr/bin/python

import sys
import random

def main(argv):
	''' read fasta file, randomly print sequences

	'''

	if len(argv) < 2 or argv[1] == '-h':
		sys.exit("%s num_seqs < fasta" % argv[0])
	
	ali = rdfa(sys.stdin)
	num_seqs = len(ali)
	sample_size = int(argv[1])

	if num_seqs < sample_size:
		sys.exit("sample_size %d is bigger than population size %d"\
					% (sample_size, num_seqs))
	
	rand_tuples = random.sample(ali, sample_size)
	[ sys.stdout.write('\n'.join(fa_tup) + '\n') for fa_tup in rand_tuples ]
	
def rdfa(fh):
	ali = list()
	header = ''
	seq = ''

	for line in fh:
		line = line.rstrip('\n\r')
		if line == '':
			continue
		if line.startswith('>'):
			if header != '':
				ali += [ (header, seq) ]
				seq = ''
			header = line
			continue
		seq += line.replace(' ', '')
	ali += [ (header, seq) ]
	return ali

if __name__ == '__main__':
	main(sys.argv)

