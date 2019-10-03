#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { TrainingCdkStack } from '../lib/training-cdk-stack';

const app = new cdk.App();
new TrainingCdkStack(app, 'TrainingCdkStack');
