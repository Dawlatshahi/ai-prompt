'use client';

import { Suspense } from 'react';
import UpdatePromptWrapper from './UpdatePromptWrapper';

const UpdatePrompt = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<UpdatePromptWrapper />
		</Suspense>
	);
};

export default UpdatePrompt;
