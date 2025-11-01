// src/app/login/page.tsx
'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/PasswordInput'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (email === 'admin@email.com' && password === 'admin123') {
            console.log('Login bem-sucedido!');
        } else {
            setError('Credenciais inválidas. Tente novamente.');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                <h2 className="text-center text-3xl font-extrabold">
                    Fazer Login
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* --- CAMPO DE EMAIL --- */}
                    {/* VERIFIQUE SE O SEU CÓDIGO ESTÁ EXATAMENTE ASSIM */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-100" // Mudei para 100 para ficar mais claro
                        >
                            Email
                        </label>
                        <div className="mt-1">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="email" // Adicionei o placeholder aqui
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* --- CAMPO DE SENHA --- */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-100" // Mudei para 100
                        >
                            Senha
                        </label>
                        <div className="mt-1">
                            <PasswordInput
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                required
                                placeholder="••••••••" // Adicionei placeholder
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}