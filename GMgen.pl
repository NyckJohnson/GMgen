#!/usr/bin/perl

use strict;
use warnings;

my @adj  = qw/multiversal singularity chronoplasmic hexagonal unimorphic sound numerical/;
my @desc = qw/god anti-matter null rainbow dream note significance/;
my @noun = qw/life equation pill particle totem bullet cycle/;

my $plot = '';

foreach  ( (\@adj, \@desc, \@noun) ){
    $plot .= @$_[rand(@$_)] . ' ';
}

print "$plot\n";