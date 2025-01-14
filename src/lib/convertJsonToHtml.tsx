import React from 'react';

function JsonToReact({ data }) {
    if (!data) {
        return null;
    }
    return (
        <div className='flex flex-col gap-4'>
            {data.map((item, index) =>
                <div>
                    {GetElementType(item,index)}
                </div>
            )}
        </div>
    );
}

function GetElementType(item,index) {

    switch (item.type) {
        case 'heading': {
            const HeadingTag = `h${item.level}`; // Dynamically create heading tag (h1, h2, etc.)
            return (
                <HeadingTag className="text-2xl font-bold" key={index}>
                    {item.children[0].text}
                </HeadingTag>
            );
        }
        case 'paragraph':
            return (
                <p key={index}>
                    {item.children[0].text}
                </p>
            );
        case 'unordered-list':
            return (
                <ul className='pl-4' key={index}>
                    {item.children.map((listItem, listItemIndex) => {
                        if (listItem.type === 'list-item') {
                            return (
                                <li className='list-disc ml-4' key={listItemIndex}>
                                    {listItem.children.map((content, contentIndex) => {
                                        if (content.type === 'list-item-content') {
                                            return (
                                                <React.Fragment key={contentIndex}>
                                                    {content.children.map((child, childIndex) => {
                                                        if (child.bold) {
                                                            return (
                                                                <strong key={childIndex}>
                                                                    {child.text}
                                                                </strong>
                                                            );
                                                        } else {
                                                            return (
                                                                <>
                                                                    {child.text}
                                                                </>
                                                            );
                                                        }
                                                    })}
                                                </React.Fragment>
                                            );
                                        }
                                        return null;
                                    })}
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            );
        default:
            return null;
    }
}
export default JsonToReact;