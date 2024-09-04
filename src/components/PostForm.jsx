import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import storageServices from '../appwrite/storageService'
import { RTE, Input, Button, Select } from './index'
function PostForm({ post }) {
    const { register, handleSubmit, control, watch, getValues, setValue } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData);

    async function submit(data) {
        if (post) {
            const file = data.image[0] ? await storageServices.uploadFile(data.image[0]) : undefined

            if (file) {
                await storageServices.deleteFile(post.featuredImage);
            }

            const newPost = await storageServices.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if (newPost) {
                navigate(`/post/${newPost.$id}`)
            }
        } else {
            const file = data.image[0] ? await storageServices.uploadFile(data.image[0]) : undefined

            if (file) {
                data.featuredImage = file.$id
            }

            const newPost = await storageServices.createPost({ ...data, userId: userData.$id, featuredImage: file.$id })

            if (newPost) navigate(`/post/${newPost.$id}`)
        }
    }

    const slugTransform = useCallback((value) => {
        if (post) {
            setValue("slug", post.$id)
        }
        if (value && typeof (value) === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/\s/g, '-')
        }
        return ''
    })

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='sm:w-2/3 px-10 mt-5'>
                <Input
                    label="title"
                    placeholder="Post title"
                    className=" mb-4"
                    {...register("title", {
                        required: true
                    })}
                />

                <Input
                    label="slug"
                    placeholder="Post slug"
                    className="mb-4"
                    {...register("slug", {
                        required: true
                    })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />
                <RTE
                    name="content"
                    label="Content:"
                    defaultValue={getValues("content")}
                    control={control}
                />
            </div>
            <div className='sm:w-1/3 pr-10 mt-5'>
                <Input
                    label="Featured Image :"
                    type="file"
                    accept="image/png image/jpg image/jpeg image.gif"
                    className="mb-4"
                    {...register("image", {
                        required: !post
                    })}
                />
                {post &&
                    <div className='w-full mb-4'>
                        <img
                            src={storageServices.filePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-lg'
                        />
                    </div>}
                <Button
                    className="w-full"
                    type="submit"
                    bgColor={post ? "bg-green-600" : undefined}
                >
                    {post ? "update" : "submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm