'use client'

import SectionComp from "@/components/atoms/SectionComp";
import React from "react";

import translate from "@/constant/translate.constant.json";
import { AllContext } from "@/components/atoms/ContextComp";


const initialStateForm = {
    name: "",
    email: "",
    message: ""
}

const SectionContact = () => {
    const { setallContext, allContext } = React.useContext(AllContext);

    const [formValue, setformValue] = React.useState(initialStateForm)
    const [loading, setloading] = React.useState(false)

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)

        await fetch("/api/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValue),
        })

        setloading(false)
        setformValue(initialStateForm)
    }
    return (
        <SectionComp id="contact" classname="bg-[#232332]">
            {/* <div className='absolute top-0 w-full h-[200px] z-50 bg-gradient-to-b from-[#232332] to-black-500/0 ' /> */}

            <div className="relative w-full h-full flex justify-center items-center flex-col py-8 gap-8 container p-8 mx-auto">
                <div className="max-w-[653px] mx-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h2>{
                        translate[`${allContext.lang as "id" | "en"}`].section_contact
                            .title
                    }</h2>
                    {/* <p className="font-normal text-center py-4 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sequi
                        ab odit iusto corporis ea sint quam. Fugit vitae quaerat inventore
                        atque, a adipisci, id cum dolores quia, temporibus voluptate.
                    </p> */}
                </div>
                <form className="w-full max-w-3xl" onSubmit={handleSubmitForm} >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="text-white block uppercase tracking-wide  text-xs font-bold mb-2"
                                htmlFor="name"
                            >{
                                    translate[`${allContext.lang as "id" | "en"}`].section_contact
                                        .fullname
                                }</label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                placeholder="Jane"
                                value={formValue.name}
                                onChange={(e) => setformValue(prev => ({ ...prev, name: e.target.value }))}
                                required
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="text-white block uppercase tracking-wide  text-xs font-bold mb-2"
                                htmlFor="email"

                            >{
                                    translate[`${allContext.lang as "id" | "en"}`].section_contact
                                        .email
                                }</label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                placeholder="Doe"
                                value={formValue.email}
                                onChange={(e) => setformValue(prev => ({ ...prev, email: e.target.value }))}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="text-white block uppercase tracking-wide text-xs font-bold mb-2"
                                htmlFor="message"
                            >{
                                    translate[`${allContext.lang as "id" | "en"}`].section_contact
                                        .message
                                }</label>
                            <textarea
                                rows={4}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                                placeholder="put your message over here.."
                                value={formValue.message}
                                onChange={(e) => setformValue(prev => ({ ...prev, message: e.target.value }))}
                                required
                            />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>

                    <button type="submit" className={`bg-blue-500 w-full py-3 rounded-[8px] text-white text-lg ${loading && "bg-slate-400"}`} disabled={loading}>{!loading ? `Submit` : `sending...`}</button>
                </form>
            </div>
        </SectionComp >
    );
};

export default SectionContact;
