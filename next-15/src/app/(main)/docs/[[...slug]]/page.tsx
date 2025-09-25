import React from 'react';

const Docs = async ({ params }: {
    params: Promise<{ slug: string[] }>
}) => {
    const { slug } = await params;

    if (slug?.length === 2) {
        return (
            <div>
                <h1>Docs for feature "{slug[0]}" and concept "{slug[1]}"</h1>
            </div>
        );
    } else if (slug?.length === 1) {
        return (
            <div>
                <h1>Docs for feature "{slug[0]}"</h1>
            </div>
        );
    }
    
    return (
        <div>
            <h1>Docs home page</h1>
        </div>
    );
};

export default Docs;
