import { Button, Select, SelectItem, TextInput } from '@tremor/react';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

const UpdateCategory = ({ index }) => {

    const { register, handleSubmit, watch, control, formState: { errors }, setError, reset, getValues } = useForm();

    const onSubmit = (data) => {

        console.log(data)
        if (getValues('category') === null) {
            setError('category', {
                type: 'manual',
                message: 'Veuillez selectionner une catégorie'
            })
        }
        
    }

    useEffect(() => {
        reset()
    }, [index, reset])

    return (
    
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-10 w-full '>

            <Controller
                    control={control}
                    name='category'
                    defaultValue={null}
                    rules={{ required: 'Veuillez selectionner une catégorie' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            placeholder="Selectionner une catégorie"
                            enableClear={false}
                        >
                            <SelectItem value="1" >Xbox Series</SelectItem>
                            <SelectItem value="2" >PlayStation 5</SelectItem>
                            <SelectItem value="3" >PC</SelectItem>
                            <SelectItem value="4" >Nitendo Switch</SelectItem>


                        </Select>
                    )}
                />
                {errors.category && <span className='text-red-500 text-xs '>{errors.category.message}</span>}
                

                <TextInput
                    type="text"
                    placeholder="Nouveau nom de catégorie"
                    error={errors.name}
                    {...register("name", {
                        required: "Merci d'indiquer un nouveau nom de catégorie",
                    })}
                />
                {errors.name && (<span className="text-red-500 text-sm "> {errors.name.message} </span>)}



                <Button type='submit' className='w-fit self-center'>Modifier</Button>
            </form>

       
    );
};

export default UpdateCategory;