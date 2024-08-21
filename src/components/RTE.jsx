import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react';

function RTE({ name, label, control, defaultValue = "" }) {

    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey='xhqd07rji9lkwwawiykq0905dhqf096mhjbxr1u43tz37fx6'
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }
                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE

// controller :-
//              // The Controller component is used to integrate the TinyMCE editor with react-hook-form. It ensures that the value of the custom input is managed by react-hook-form and not by the separate component by providing several methods and object, allowing individual components like rte to participate in form validation, state management, and submission

// control : -
//              This object manages the form state and must be passed to every Controller you use.This object contains methods for registering components into React Hook Form.

// render : -
//           A render prop is a function that a component uses to know what to render. it takes an object as an argument. and returns the JSX for your custom input component. This is where you specify how your custom input (like the TinyMCE editor) shouldrender ,  behave and how it should integrate with the form.

//field object :-
//              it is part of the argument passed to the render function. It's crucial because it provides the necessary methods and properties to connect your custom input to the form managed by react-hook-form.




//onEditorChange:-
//                   This is an event handler provided by the TinyMCE Editor component that fires whenever the content of the editor changes.


// Q what is need of custom render , if the react renders eveything then why this custom render ?

// ->       For standard HTML inputs like <input>, <textarea>, or <select>, React can directly bind the value and handle changes using props like value and onChange.

//  However, when you're dealing with custom or complex components—like third-party libraries (e.g., TinyMCE editor)—these components don't always behave like standard HTML inputs. They often have their own internal state and methods to handle user interactions,like here the editor have initialstate and onEditorChange   which might not align with React's standard way of managing form state.


// Q what is use of controller ?
// ->
//      With standard inputs, you can just pass value and onChange directly to access state and value. But with custom components like TinyMCE, these properties might not exist or might work differently.
// The Controller component from react - hook - form acts as a bridge, allowing you to integrate these custom components into the form.


// Q what is use of render function ?
// ->
//      The render function inside the Controller allows you to customize how the form's state management is tied to the custom input's behavior.
// For example, TinyMCE uses onEditorChange to detect changes in its content.This is different from a standard < input >, which uses onChange.The custom render function lets you map onEditorChange to react - hook - form's onChange so that the form state is updated correctly.