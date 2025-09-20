"use client"

export default function NotificationButton() {
  const handleActivateNotifications = async () => {
    if (!("Notification" in window)) {
      alert("Este navegador não suporta notificações.")
      return
    }

    if (Notification.permission === "granted") {
      alert("Notificações já estão ativadas!")
      return
    }

    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        new Notification("Raspe & Brilhe", {
          body: "Notificações ativadas com sucesso! Você receberá atualizações sobre novas versões.",
          icon: "/LOGO DO RASPE & BRILHE.svg",
        })
      }
    } else {
      alert("Notificações foram negadas. Ative nas configurações do navegador.")
    }
  }

  return (
    <button
      onClick={handleActivateNotifications}
      className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
    >
      Ativar Notificações
    </button>
  )
}