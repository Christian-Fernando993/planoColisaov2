"use client";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import React, { useCallback, useState, useEffect } from "react";

import { UploadIcon } from "@/assets/UploadIcon";

export function Ondrop() {

    const [files, setFiles] = useState([]);

    // arrastar ou clicar para inserir imagem

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log("A leitura do arquivo foi abortada");
            reader.onerror = () => console.log("A leitura do arquivo falhou");
            reader.onload = () => {
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        });
    }, [])

    //Formas de aceitar o arquivo

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        maxFiles: 2,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'application/pdf': ['.pdf'],
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
        }
    });

    //Preview da imagem

    const thumbs = files.map(file => (
        <div className="inline-flex rounded-lg mt-4 box-border justify-center w-80 h-80 m-auto" key={file.name}>
            <div className="flex min-w-0 overflow-hidden">
                <Image className="block w-auto h-full rounded-lg m-auto" alt="Foto da CNH"
                    width={200} height={200} src={file.preview} onLoad={() => { URL.revokeObjectURL(file.preview) }} />
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    });

    // Processo de remover imagem/pdf
    const removeFile = (file) => () => {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)    
    }

    const removerImagem = acceptedFiles.map(file => (
        <div key={file.path} className="flex items-center justify-center mt-4">
            <button className="w-32 h-12 px-2 bg-red-600 hover:bg-red-700 font-bromny rounded-full text-base text-white"
                onClick={removeFile(file)}>Remover
            </button>
        </div>
    ))

    return (
        <section className="pt-10">
            {/* Foto da CNH Aberta */}
            <div>
                    {/* Metodo de selecionar ou arrastar imagem */}

                    <div {...getRootProps()}
                        className={`m-auto  items-center justify-center border-dashed border-2 cursor-pointer border-gray-600 rounded-xl transition-text easy-in-out duration-500 p-5 @laptop:max-w-2xl
                        ${isDragActive ? 'border-loovi-blue' : 'border-gray-400'} `}>
                        <label htmlFor="dropzone-file">
                            <input {...getInputProps()} className="hidden" type="file" accept=".jpg .jpeg .pdf" placeholder="Clique para selecionar imagem do veiculo" />
                            <UploadIcon  width={35} height={35} className={`w-10 h-10 mb-3 m-auto cursor-pointer ${isDragActive ? 'text-loovi-blue' : 'text-gray-400'}`} />
                            {
                                isDragActive ?
                                    (
                                        <p className="font-bromny text-loovi-blue ">
                                            <span className="font-bold">Solte </span>
                                            para adicionar
                                        </p>
                                    ) : (
                                        <div>
                                            <p className="font-bromny text-center text-type-blue cursor-pointer">
                                                <span className="font-bold text-center">Clique aqui para enviar a foto </span>
                                            </p>
                                            <p className="font-bromny text-center text-type-blue cursor-pointer">
                                                <span className="font-bold">Arquivos suportados: </span>
                                                <span>PDF, JPG, PNG</span>
                                            </p>
                                        </div>
                                    )
                            }
                        </label>
                        <input className="hidden"></input>
                    </div>

                    {/* Mostra a imagem importada */}
                    <aside className="flex flex-row flex-wrap m-auto">
                        {thumbs}
                    </aside>

                    {/* Botão de remover a imagem */}
                    <aside>
                        {removerImagem}
                    </aside>

            </div>
        </section>
    )
}




