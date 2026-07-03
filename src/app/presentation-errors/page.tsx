"use client";
import { useState, useEffect, useCallback } from "react";
import {
  ServerCrash, ShieldAlert, FileQuestion, Bug, CheckCircle2,
  AlertOctagon, TerminalSquare, RefreshCw, Zap, ArrowRight,
  Code2, Braces, Layers, Lock, AlertCircle, Database, FileX,
  UserX, BadgeAlert, AlertTriangle, Blocks, Rocket, FileCode2
} from "lucide-react";
import Image from "next/image";

const slides = [
  { id: "cover", label: "Cover", title: "Standardisation des Erreurs API", subtitle: "L'art de communiquer entre Spring Boot et React/Angular" },
  { id: "problem", label: "Le Problème", title: "Le Cauchemar du Front-End", subtitle: "Pourquoi gérer les erreurs est souvent si difficile" },
  { id: "err_msg", label: "ErrorMessage", title: "L'Objet ErrorMessage", subtitle: "Le contrat universel (DTO) entre Back et Front" },
  { id: "spring_advice", label: "Spring Boot", title: "@RestControllerAdvice", subtitle: "Centralisation côté Back-End" },
  { id: "spring_handler", label: "ExceptionHandler", title: "@ExceptionHandler", subtitle: "Le mappage automatique Exception -> ErrorMessage" },
  { id: "intro", label: "SPA Interceptors", title: "Architecture SPA & Erreurs", subtitle: "Comment centraliser la gestion d'erreurs en React/Angular" },
  { id: "auth_failed", label: "AuthFailed", title: "AuthenticationFailedException", subtitle: "Code 401 - Échec de connexion" },
  { id: "inv_token", label: "InvalidToken", title: "InvalidTokenException", subtitle: "Code 401 - Gestion du JWT" },
  { id: "acc_denied", label: "AccessDenied", title: "AccessDeniedException", subtitle: "Code 403 - Contrôle des Rôles (RBAC)" },
  { id: "unauth_op", label: "UnauthOp", title: "UnauthorizedOperationException", subtitle: "Code 403 - Opération Interdite" },
  { id: "security", label: "Security", title: "SecurityException", subtitle: "Code 403 - Faille & WAF" },
  { id: "validation", label: "Validation", title: "ValidationException", subtitle: "Code 400 - Formulaires & UX" },
  { id: "inv_data", label: "InvalidData", title: "InvalidDataException", subtitle: "Code 400 - Cohérence Métier" },
  { id: "inv_format", label: "InvalidFormat", title: "InvalidFormatException", subtitle: "Code 400 - Expressions Régulières" },
  { id: "req_out", label: "Required/Range", title: "Champs Requis & Limites", subtitle: "Code 400 - RequiredField & OutOfRange" },
  { id: "not_found", label: "NotFound", title: "EntityNotFoundException", subtitle: "Code 404 - Routage & Empty States" },
  { id: "exists", label: "AlreadyExists", title: "EntityAlreadyExistsException", subtitle: "Code 409 - Doublons & Toasts" },
  { id: "conflict", label: "DataConflict", title: "DataConflictException", subtitle: "Code 409 - État asynchrone" },
  { id: "business", label: "Business", title: "BusinessException", subtitle: "Code 422 - Règles Métier" },
  { id: "internal", label: "Internal", title: "InternalServerError", subtitle: "Code 500 - Crash & Fallback" },
  { id: "technical", label: "Technical", title: "TechnicalException", subtitle: "Code 500 - API Tiers & Config" },
  { id: "db_file", label: "DB/File", title: "Base de données & Fichiers", subtitle: "Code 500 - Database & FileOperation" },
  { id: "cta", label: "Conclusion", title: "Best Practices Globales", subtitle: "Le workflow complet Front/Back" },
];

function Pill({ icon, text, color = "text-[#00FF88]", bg = "bg-[#00FF88]/10", border = "border-[#00FF88]/20" }: any) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${bg} border ${border} text-sm font-medium ${color}`}>
      <span className="shrink-0">{icon}</span>
      <span className="text-white">{text}</span>
    </div>
  );
}

function CodeSnippet({ title, code, language = "js" }: { title: string, code: string, language?: string }) {
  return (
    <div className="w-full bg-[#0D1317] rounded-xl border border-white/10 overflow-hidden font-mono text-xs text-left mt-4 shadow-xl">
      <div className="bg-[#152026] px-3 py-1.5 border-b border-white/10 text-[#A0AAB2] flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 font-semibold text-white/80">{title}</span>
      </div>
      <div className="p-4 text-[#A0AAB2] overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {code}
      </div>
    </div>
  );
}

function SlideContent({ id }: { id: string }) {
  switch (id) {
    case "cover": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl py-10">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#00FF88] blur-[80px] opacity-20 rounded-full"></div>
          <Rocket className="w-24 h-24 text-[#00FF88] relative z-10" />
        </div>
        <h2 className="text-4xl font-black text-white mb-6">Harmonisation Back-End / Front-End</h2>
        <p className="text-lg text-[#A0AAB2] leading-relaxed max-w-2xl mb-8">
          De Spring Boot vers React & Angular. 
          Découvrez comment une simple architecture d'exception transforme le chaos des API en une expérience développeur fluide et prédictible.
        </p>
        <div className="flex gap-4 mt-4">
          <Pill icon={<FileCode2 className="w-4 h-4" />} text="Spring Boot" color="text-[#6db33f]" bg="bg-[#6db33f]/10" border="border-[#6db33f]/20" />
          <Pill icon={<Blocks className="w-4 h-4" />} text="React / Angular" color="text-[#61dafb]" bg="bg-[#61dafb]/10" border="border-[#61dafb]/20" />
        </div>
      </div>
    );

    case "problem": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <Bug className="w-16 h-16 text-red-500 mb-6" />
        <p className="text-base text-[#A0AAB2] leading-relaxed mb-4">
          Sans standardisation, chaque développeur Back-End renvoie ses erreurs différemment. Le développeur Front-End se retrouve à écrire des dizaines de conditions `if` pour vérifier si le message d'erreur est dans `error.message`, `error.detail`, `error.error_description` ou s'il s'agit d'une page HTML Tomcat 404...
        </p>
        <div className="flex w-full gap-4 opacity-70">
          <CodeSnippet title="❌ Mauvaise Réponse A" code={`{\n  "error": "Bad Request",\n  "status": 400,\n  "details": "L'email est invalide"\n}`} />
          <CodeSnippet title="❌ Mauvaise Réponse B" code={`{\n  "success": false,\n  "msg": "Utilisateur non trouvé"\n}`} />
        </div>
      </div>
    );

    case "err_msg": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <FileCode2 className="w-16 h-16 text-[#00FF88] mb-6" />
        <p className="text-base text-[#A0AAB2] leading-relaxed mb-4">
          La solution commence par la création d'un DTO (Data Transfer Object) immuable côté Spring Boot. C'est le <b>Contrat Universel</b> : toute erreur API renverra <i>exclusivement</i> cet objet JSON.
        </p>
        <CodeSnippet title="ErrorMessage.java (Spring Boot)" code={`public class ErrorMessage {
    private int code;
    private Date timestamp;
    private String message;
    
    // Constructeur, Getters et Setters...
    public ErrorMessage(int code, Date timestamp, String message) {
        this.code = code;
        this.timestamp = timestamp;
        this.message = message;
    }
}`} />
      </div>
    );

    case "spring_advice": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <Blocks className="w-16 h-16 text-[#6db33f] mb-6" />
        <p className="text-base text-[#A0AAB2] leading-relaxed mb-4">
          Plutôt que d'utiliser des `try/catch` dans vos Controllers, Spring Boot propose l'annotation <b>@RestControllerAdvice</b>. Elle intercepte toutes les exceptions jetées par l'application avant qu'elles n'atteignent le client.
        </p>
        <CodeSnippet title="ControllerAdvice.java (Spring Boot)" code={`@RestControllerAdvice
public class GlobalExceptionHandler {

    // Cette classe "écoute" toutes les exceptions jetées dans le code
    // et les convertit proprement en ErrorMessage JSON.
    // Cela garde vos @RestController très propres et concentrés sur le succès.
    
}`} />
      </div>
    );

    case "spring_handler": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <Code2 className="w-16 h-16 text-[#6db33f] mb-6" />
        <p className="text-base text-[#A0AAB2] leading-relaxed mb-4">
          À l'intérieur du `@RestControllerAdvice`, on utilise `@ExceptionHandler` pour cibler des exceptions spécifiques et construire l'objet `ErrorMessage` avec le bon code HTTP.
        </p>
        <CodeSnippet title="GlobalExceptionHandler.java (Spring Boot)" code={`@ExceptionHandler(EntityNotFoundException.class)
public ResponseEntity<ErrorMessage> handleNotFoundException(EntityNotFoundException ex, WebRequest request) {
    ErrorMessage message = new ErrorMessage(
        HttpStatus.NOT_FOUND.value(), // 404
        new Date(),
        ex.getMessage() // Ex: "L'utilisateur avec l'ID 9 n'existe pas"
    );
    return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
}`} />
      </div>
    );

    case "intro": return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <TerminalSquare className="w-16 h-16 text-[#61dafb] mb-6" />
        <p className="text-base text-[#A0AAB2] leading-relaxed mb-4">
          Dans une SPA (React/Angular), les erreurs ne doivent pas être gérées composant par composant. Puisque l'objet <code>ErrorMessage</code> est standardisé, on peut le traiter globalement via un <b>Intercepteur HTTP</b> (Axios Interceptors ou HttpInterceptor).
        </p>
        <CodeSnippet title="Axios Interceptor (React/Vue)" code={`axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // On extrait le contrat standard
    const { code, message, timestamp } = error.response?.data || {};
    
    if (code === 401) {
      store.dispatch(logout());
      window.location.href = '/login';
    } else if (code === 500) {
      toast.error("Erreur critique : " + message);
    }
    return Promise.reject(error);
  }
);`} />
      </div>
    );

    case "auth_failed": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <UserX className="w-12 h-12 text-orange-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Se produit spécifiquement lors de la tentative de connexion avec de mauvais identifiants.</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-orange-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Ne <b>pas</b> utiliser l'intercepteur global pour cette erreur précise, car elle est attendue sur la page Login.</li>
            <li>Dans le composant `LoginForm`, catcher le 401 et afficher un texte en rouge sous le formulaire : <i>"Email ou mot de passe incorrect."</i></li>
            <li>Éviter de secouer (shake) le formulaire (mauvaise pratique d'accessibilité), privilégier un message clair.</li>
          </ul>
        </div>
      </div>
    );

    case "inv_token": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <Lock className="w-12 h-12 text-orange-500 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Le JWT stocké côté client a expiré ou a été invalidé par le serveur.</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-orange-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>C'est le rôle de <b>l'intercepteur global</b> (Axios / HttpInterceptor).</li>
            <li>Dès la réception du 401, déclenchez une action Redux/NgRx de `logout()`.</li>
            <li>Nettoyez impérativement le `localStorage` ou les cookies du token.</li>
            <li>Redirigez vers `/login` avec un query param : `?redirect=/ancienne-page` pour que l'UX soit fluide après reconnexion.</li>
          </ul>
        </div>
      </div>
    );

    case "acc_denied": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <ShieldAlert className="w-12 h-12 text-red-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Le token est valide, mais le rôle (ex: USER) ne permet pas d'accéder à l'API (qui demande ADMIN).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-red-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Intercepteur : Si 403, rediriger vers une route Front spécifique `/403` ou `/unauthorized`.</li>
            <li>Ne déconnectez pas l'utilisateur ! Il est toujours légitimement loggué.</li>
            <li>Prévention : Masquez (via conditions React ou directives Angular `*ngIfHasRole`) les boutons ou menus menant à ces actions interdites.</li>
          </ul>
        </div>
      </div>
    );

    case "unauth_op": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">L'utilisateur a le bon rôle, mais l'entité visée ne lui appartient pas (ex: supprimer le commentaire d'un autre).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-yellow-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Contrairement à `AccessDenied`, ici on ne redirige pas vers une page d'erreur complète.</li>
            <li>On utilise un <b>Toast Notification</b> d'alerte (ex: `react-hot-toast` ou Angular Material SnackBar).</li>
            <li>Le message Backend de `ErrorMessage` doit être affiché tel quel : <i>"Vous ne pouvez modifier que vos propres publications."</i></li>
          </ul>
        </div>
      </div>
    );

    case "security": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <BadgeAlert className="w-12 h-12 text-red-600 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Comportement suspect ou faille détectée (CSRF invalide, Injection SQL interceptée, Rate Limiting).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-red-600/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Cette erreur ne doit donner <b>aucun détail technique</b> à l'utilisateur.</li>
            <li>L'intercepteur doit afficher une modale critique : <i>"Action bloquée par la politique de sécurité."</i></li>
            <li>Si c'est du Rate Limiting (souvent 429 mappé en SecurityException), afficher : <i>"Trop de requêtes, veuillez patienter."</i></li>
          </ul>
        </div>
      </div>
    );

    case "validation": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <AlertOctagon className="w-12 h-12 text-yellow-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Erreur globale remontée par le validateur Spring (`@Valid`, `@RequestBody`).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-yellow-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>L'objet `ErrorMessage` devrait idéalement contenir une propriété `errors` (tableau des champs fautifs) en plus du `message`.</li>
            <li>Côté React (avec `react-hook-form`), vous pouvez itérer sur ce tableau et appeler `setError(fieldName, {"{ message }"})`.</li>
            <li>Ainsi, les erreurs provenant du Backend s'affichent magiquement sous chaque input de votre formulaire, comme si c'était validé côté client !</li>
          </ul>
        </div>
      </div>
    );

    case "inv_data": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <FileQuestion className="w-12 h-12 text-yellow-300 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Données structurellement valides (JSON ok) mais sémantiquement impossibles (ex: date de fin &lt; date de début).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-yellow-300/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Puisqu'il s'agit d'une erreur de logique qui implique souvent plusieurs champs croisés, le surlignage d'un seul input est insuffisant.</li>
            <li>Affichez le composant d'erreur (Alerte Banner) <b>en haut du formulaire</b> avec le texte de l'exception : <i>"La date de fin ne peut être antérieure à la date de début."</i></li>
          </ul>
        </div>
      </div>
    );

    case "inv_format": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <Braces className="w-12 h-12 text-yellow-500 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Format de chaîne de caractères invalide (ex: Regex d'un Numéro de Sécu échouée, email malformé).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-yellow-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li><b>Règle d'or :</b> Le Back-End ne devrait servir ici que de filet de sécurité.</li>
            <li>Vous devez implémenter la MÊME regex côté Front-End (via Zod/Yup en React, ou Validators.pattern en Angular).</li>
            <li>L'utilisateur ne devrait jamais atteindre le Back-End avec un mauvais format d'email, c'est une perte de temps/requête.</li>
          </ul>
        </div>
      </div>
    );

    case "req_out": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <AlertCircle className="w-12 h-12 text-yellow-600 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">RequiredFieldException (champ manquant) & OutOfRangeException (valeur &gt; max ou &lt; min).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-yellow-600/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Idem que `InvalidFormat`, cela souligne souvent une lacune dans votre formulaire Front-End.</li>
            <li>Assurez-vous que les attributs HTML5 `required`, `min`, `max` sont utilisés sur les balises `&lt;input&gt;`.</li>
            <li>Si cette exception Back-End est déclenchée, c'est probablement qu'un utilisateur avancé a bypassé le front via Postman ou les DevTools.</li>
          </ul>
        </div>
      </div>
    );

    case "not_found": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <FileX className="w-12 h-12 text-blue-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">La ressource demandée via l'URL d'API n'existe pas en DB (ex: GET /api/users/999).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-blue-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li><b>Cas Liste :</b> (ex: recherche sans résultat). Le Front affiche un composant "Empty State" avec un joli SVG : <i>"Aucun résultat trouvé"</i>.</li>
            <li><b>Cas Détail :</b> (ex: `useEffect` qui fetch un ID de l'URL côté React). Le catch de l'API doit déclencher une redirection via le Routeur vers votre composant page `/404` global.</li>
          </ul>
        </div>
      </div>
    );

    case "exists": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <Layers className="w-12 h-12 text-blue-500 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Tentative de création d'une ressource qui violerait une contrainte d'unicité (ex: email déjà pris).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-blue-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Afficher un Toast d'erreur en haut à droite pour avertir l'utilisateur.</li>
            <li>Si l'erreur concerne un champ spécifique (comme l'email), on peut la mapper localement pour afficher l'erreur en dessous de l'input d'email : <i>"Cet email est déjà pris"</i>.</li>
          </ul>
        </div>
      </div>
    );

    case "conflict": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <RefreshCw className="w-12 h-12 text-purple-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Conflit d'état métier asynchrone (ex: l'utilisateur modifie une ressource qui a été supprimée entre-temps par qqn d'autre).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-purple-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Il faut afficher une Modale (Dialogue) expliquant le conflit.</li>
            <li>Ex: <i>"Les données ont été modifiées par un autre utilisateur. Voulez-vous rafraîchir la page ?"</i></li>
            <li>Côté React Query (React) ou RxJS (Angular), il faut déclencher un `refetch()` automatique des données pour resynchroniser le Front.</li>
          </ul>
        </div>
      </div>
    );

    case "business": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Règle de gestion majeure non respectée (ex: "Le solde de la carte est insuffisant"). Souvent code HTTP 422.</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-emerald-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Cette erreur est la plus précieuse : le texte vient directement du fonctionnel (Métier).</li>
            <li>L'UI doit afficher le `ErrorMessage.message` tel quel, de manière bien visible (Bannière d'alerte, Toast, ou Modale).</li>
            <li>Ne <b>jamais</b> hardcoder la traduction côté Front pour cette erreur, fiez-vous au Back-End (qui gère son i18n).</li>
          </ul>
        </div>
      </div>
    );

    case "internal": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <ServerCrash className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Le cauchemar des développeurs : NullPointerException, IndexOutOfBounds, crash de thread.</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-red-500/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Intercepteur : catch le status `500`.</li>
            <li>Afficher un Toast générique : <i>"Oups, une erreur inattendue s'est produite."</i></li>
            <li><b>Crucial :</b> Le Front-End DOIT logger cette erreur vers votre outil de monitoring (Sentry, LogRocket).</li>
            <li>Ajouter le `timestamp` dans l'UI permet à l'utilisateur de dire au support "Ça a planté le 01/06 à 22h00". Les devs Back-End retrouveront l'exception instantanément.</li>
          </ul>
        </div>
      </div>
    );

    case "technical": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <Zap className="w-12 h-12 text-red-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">Problème d'infrastructure, de configuration SMTP, ou d'API tierce (ex: Stripe est down).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-red-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Comportement Front identique au InternalServerError.</li>
            <li>Si vous savez que l'erreur vient d'un service précis, vous pouvez temporiser et informer le client de manière ciblée : <i>"Le service de paiement est temporairement indisponible, veuillez réessayer dans quelques minutes."</i></li>
          </ul>
        </div>
      </div>
    );

    case "db_file": return (
      <div className="flex flex-col items-center w-full max-w-3xl text-center">
        <Database className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-[#A0AAB2] text-sm mb-4">DatabaseException (Base injoignable) & FileOperationException (Disque plein, I/O failed).</p>
        <div className="bg-[#152026] p-5 rounded-2xl border border-gray-400/20 w-full text-left">
          <h4 className="text-white font-bold mb-2">💡 Conseil React / Angular</h4>
          <ul className="list-disc pl-5 text-[#A0AAB2] text-sm space-y-2">
            <li>Ne montrez <b>absolument jamais</b> la stacktrace SQL ou l'erreur de fichier brutale à l'utilisateur (faille de sécurité et fuite d'architecture).</li>
            <li>Le `ErrorMessage` du Back doit être masqué et remplacé par l'objet standard.</li>
            <li>Si c'est un upload de fichier (`FileOperation`), le Front peut suggérer : <i>"L'envoi a échoué. Assurez-vous que le fichier n'est pas corrompu."</i></li>
          </ul>
        </div>
      </div>
    );

    case "cta": return (
      <div className="flex flex-col items-center justify-center text-center gap-8 w-full max-w-3xl">
        <div className="w-20 h-20 bg-[#00FF88]/10 rounded-full flex items-center justify-center border border-[#00FF88]/30 shadow-[0_0_60px_rgba(0,255,136,0.2)] relative">
          <div className="absolute inset-0 bg-[#00FF88] blur-[30px] opacity-20 rounded-full"></div>
          <CheckCircle2 className="w-10 h-10 text-[#00FF88] relative z-10" />
        </div>
        <h2 className="text-3xl font-bold text-white">Un Contrat Solide = Des Développeurs Heureux</h2>
        <p className="text-[#A0AAB2] text-lg leading-relaxed">
          Centralisez 80% de votre gestion d'erreur dans le <b>@RestControllerAdvice</b> (Back-End) et l'<b>Intercepteur Global</b> (Front-End). Laissez les 20% restants (validation formulaires ciblée) aux composants spécifiques.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4 text-[#00FF88]">
          <span className="bg-[#00FF88]/10 px-4 py-2 rounded-lg font-mono">#Spring Boot</span>
          <span className="bg-[#00FF88]/10 px-4 py-2 rounded-lg font-mono">#ReactQuery</span>
          <span className="bg-[#00FF88]/10 px-4 py-2 rounded-lg font-mono">#AxiosInterceptors</span>
          <span className="bg-[#00FF88]/10 px-4 py-2 rounded-lg font-mono">#AngularHttpInterceptor</span>
        </div>
      </div>
    );

    default: return null;
  }
}

export default function ErrorPresentationPage() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="h-screen w-screen bg-[#0D1317] flex flex-col overflow-hidden text-white select-none relative">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00FF88]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />



      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 z-10 min-h-0 overflow-hidden">
        <div key={current} className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 animate-[fadeIn_0.4s_ease-out_forwards] max-h-full">
          {slide.id !== "cover" && (
            <div className="text-center shrink-0">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {slide.title}
              </h1>
              <p className="text-sm text-[#00FF88] font-medium">{slide.subtitle}</p>
            </div>
          )}
          <div className="w-full flex justify-center overflow-y-auto shrink pb-4">
            <SlideContent id={slide.id} />
          </div>
        </div>
      </main>

      <footer className="shrink-0 px-6 py-3 flex flex-col items-center gap-2 z-20 border-t border-white/5">
        <div className="w-full max-w-3xl h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#00FF88] to-emerald-400 transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
        <div className="text-[10px] text-[#A0AAB2] opacity-60">
          ◀ ▶ ou Espace pour naviguer
        </div>
      </footer>
    </div>
  );
}
