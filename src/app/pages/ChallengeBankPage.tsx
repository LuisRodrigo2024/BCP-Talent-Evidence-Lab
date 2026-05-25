import { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Search, Target, Clock, Users, TrendingUp, ArrowRight, Filter, AlertCircle } from 'lucide-react';
import { mockChallenges, mockPortfolio, type Challenge } from '../data/mockData';

export default function ChallengeBankPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const companies = ['all', ...Array.from(new Set(mockChallenges.map((c) => c.company)))];

  const filteredChallenges = mockChallenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.area.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCompany =
      selectedCompany === 'all' || challenge.company === selectedCompany;

    const matchesDifficulty =
      selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;

    return matchesSearch && matchesCompany && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'Básico':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusColor = (status: Challenge['status']) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Challenge['status']) => {
    switch (status) {
      case 'open':
        return 'Abierto';
      case 'in-progress':
        return 'En Progreso';
      case 'completed':
        return 'Completado';
    }
  };

  const hasActiveChallenge = mockPortfolio.activeChallenge !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Banco de Retos Empresariales</h1>
          <p className="text-gray-600">
            Retos reales de BCP y, progresivamente, de empresas seleccionadas del grupo Credicorp
          </p>
        </div>

        {/* Active Challenge Banner */}
        {hasActiveChallenge && mockPortfolio.activeChallenge && (
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-orange-900 mb-2">Ya tienes un reto activo</h3>
                  <p className="text-sm text-orange-800 mb-3">
                    Actualmente estás participando en:{' '}
                    <strong>
                      {mockPortfolio.activeChallenge.challengeTitle} — {mockPortfolio.activeChallenge.company}
                    </strong>
                  </p>
                  <p className="text-sm text-orange-800">
                    Para mantener la calidad del trabajo en célula, no puedes postular a otro reto hasta finalizar o retirarte del reto actual.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retos Disponibles</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockChallenges.filter((c) => c.status === 'open').length}
              </div>
              <p className="text-xs text-muted-foreground">Abiertos para postular</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Empresas Activas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{companies.length - 1}</div>
              <p className="text-xs text-muted-foreground">Del grupo Credicorp</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos Trabajando</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockChallenges.reduce((sum, c) => sum + c.teams, 0)}
              </div>
              <p className="text-xs text-muted-foreground">En diferentes fases</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duración Promedio</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 sem</div>
              <p className="text-xs text-muted-foreground">Por reto completado</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              <CardTitle>Filtros</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Buscar retos por título, descripción o área..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger>
                    <SelectValue placeholder="Empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las empresas</SelectItem>
                    {companies.slice(1).map((company) => (
                      <SelectItem key={company} value={company}>
                        {company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las dificultades</SelectItem>
                    <SelectItem value="Básico">Básico</SelectItem>
                    <SelectItem value="Intermedio">Intermedio</SelectItem>
                    <SelectItem value="Avanzado">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredChallenges.map((challenge) => (
            <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {challenge.companyLogo}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {challenge.company}
                      </p>
                      <p className="text-xs text-gray-500">{challenge.area}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(challenge.status)}>
                    {getStatusText(challenge.status)}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {challenge.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {challenge.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {challenge.skills.length > 3 && (
                    <Badge variant="secondary">+{challenge.skills.length - 3}</Badge>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Dificultad</p>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Duración</p>
                    <p className="font-medium text-sm">{challenge.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Equipos</p>
                    <p className="font-medium text-sm">
                      {challenge.teams}/{challenge.maxTeams}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Fase: {challenge.phase}
                  </Badge>
                  {hasActiveChallenge ? (
                    <div className="flex flex-col items-end gap-1">
                      <Button disabled variant="outline">
                        Postulación bloqueada temporalmente
                      </Button>
                      <span className="text-xs text-gray-500">
                        No puedes participar en dos retos simultáneamente
                      </span>
                    </div>
                  ) : (
                    <Button asChild>
                      <Link to={`/challenges/${challenge.id}`}>
                        Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <Card className="p-12">
            <div className="text-center">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No se encontraron retos</h3>
              <p className="text-gray-600">
                Intenta ajustar los filtros o buscar con otros términos
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
