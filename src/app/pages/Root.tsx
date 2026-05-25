import { Outlet, Link, useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Menu, User, GraduationCap, Building2, Shield, Users } from 'lucide-react';

export default function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">
                  Cela <span className="font-extrabold text-blue-600">AI</span>pa
                </h1>
                <p className="text-xs text-gray-600">Experiencia Verificable en Contexto Real</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/challenges"
                className={`text-sm font-medium transition-colors ${
                  isActive('/challenges')
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Retos
              </Link>
              <Link
                to="/student"
                className={`text-sm font-medium transition-colors ${
                  isActive('/student')
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mi Dashboard
              </Link>
              <Link
                to="/portfolio"
                className={`text-sm font-medium transition-colors ${
                  isActive('/portfolio')
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Portafolio
              </Link>
              <Link
                to="/oportunidades"
                className={`text-sm font-medium transition-colors ${
                  isActive('/oportunidades') || isActive('/fast-track')
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Oportunidades
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline">María González</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/student" className="flex items-center gap-2 cursor-pointer">
                      <GraduationCap className="w-4 h-4" />
                      Dashboard Estudiante
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/company" className="flex items-center gap-2 cursor-pointer">
                      <Building2 className="w-4 h-4" />
                      Dashboard Empresa
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/validator" className="flex items-center gap-2 cursor-pointer">
                      <Shield className="w-4 h-4" />
                      Dashboard Validador
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/hr" className="flex items-center gap-2 cursor-pointer">
                      <Users className="w-4 h-4" />
                      Dashboard RR.HH.
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="sm">
                    <Menu className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/" className="cursor-pointer">Inicio</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/challenges" className="cursor-pointer">Retos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/student" className="cursor-pointer">Mi Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/portfolio" className="cursor-pointer">Portafolio</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/oportunidades" className="cursor-pointer">Oportunidades</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3">Sobre el Proyecto</h3>
              <p className="text-sm text-gray-600">
                Convertir talento junior con potencial en talento observable, validado y
                recomendable para empresas reales.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Para Estudiantes</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Retos Empresariales</li>
                <li>Validación Técnica</li>
                <li>Portafolio de Evidencias</li>
                <li>Oportunidades Laborales</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Para Empresas</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Publicar Retos</li>
                <li>Observar Talento</li>
                <li>Soluciones Validadas</li>
                <li>Precalificación Fast-Track</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Ecosistema</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Fase Piloto: BCP</li>
                <li>Escalamiento: Credicorp</li>
                <li>Futuro: MYPEs y Aliados</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2026 Cela <span className="font-semibold">AI</span>pa. Sistema socio-técnico de experiencia verificable
            en contexto empresarial real.
          </div>
        </div>
      </footer>
    </div>
  );
}
