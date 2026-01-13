'use client';
import React, { useState } from 'react';
import { Mail, Building2, Users, Shield, ArrowRight } from 'lucide-react';

interface DemoFormProps {
    onSubmit: (email: string, company: string, teamSize: string) => void;
}

interface FormInputProps {
    icon: React.ReactNode;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

// FormInput Component
const FormInput: React.FC<FormInputProps> = ({ icon, type, placeholder, value, onChange, required }) => {
    return (
        <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                {icon}
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
        </div>
    );
};

// Main DemoForm Component
const DemoForm: React.FC<DemoFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSuccess(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        onSubmit(email, company, teamSize);
        setIsSubmitting(false);
        setIsSuccess(false);
    };

    return (
        <div className="p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl">
            <div className="mb-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-pink-500/30 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        <div className="relative bg-white/10 p-4 rounded-full border border-white/20">
                            <Shield className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-2 relative group">
                    <span className="relative inline-block text-white">
                        Secure Your Enterprise Today
                    </span>
                </h2>
                <p className="text-white/80 flex flex-col items-center space-y-1">
                    <span className="relative">
                        Join hundreds of companies protecting their infrastructure
                    </span>
                    <div className="flex space-x-2 text-xs text-white/50 mt-2">
                        <span>🔒 No credit card required</span>
                        <span>•</span>
                        <span>⚡ Setup in minutes</span>
                    </div>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                    icon={<Mail className="text-white/60" size={18} />}
                    type="email"
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <FormInput
                    icon={<Building2 className="text-white/60" size={18} />}
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />

                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                        <Users className="text-white/60" size={18} />
                    </div>
                    <select 
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        required
                        className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-gray-900">Team Size</option>
                        <option value="1-10" className="bg-gray-900">1-10 employees</option>
                        <option value="11-50" className="bg-gray-900">11-50 employees</option>
                        <option value="51-200" className="bg-gray-900">51-200 employees</option>
                        <option value="200+" className="bg-gray-900">200+ employees</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg ${
                        isSuccess
                            ? 'bg-green-600'
                            : 'bg-white/10 hover:bg-white/20'
                    } text-white font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg border border-white/20 hover:shadow-white/20 hover:shadow-2xl flex items-center justify-center space-x-2 text-lg backdrop-blur-xl`}
                >
                    <span>{isSubmitting ? 'Submitting...' : isSuccess ? 'Success!' : 'Request Demo'}</span>
                    {!isSubmitting && !isSuccess && <ArrowRight className="w-5 h-5" />}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-white/60">
                14-day free trial • No credit card required • Setup in minutes
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-6 text-xs text-white/50">
                    <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>ISO 27001</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>GDPR</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoForm;

