---
layout: post
title: Distributed Training
title_es: Entrenamiento distribuido
excerpt_es: El entrenamiento distribuido consiste en partir la carga de trabajo entre varias unidades de procesamiento para acelerar el entrenamiento, en especial en aprendizaje automático.
#subtitle: An essential part of Resources Evaluation. GSLIB Cell Based Method.
tags: [Distributed Training]
bigimg: /img/per010rz.jpg
share-img: /img/abstract_bg_cuda.png.PNG
---

Distributed training is the process of partitioning the workload 
across multiple processing units to speed up the training especially
in ML.

The Internet Protocol (IP) addresses are unique labels assigned to each device connected to a network. IPs
 are the rules to govern how data is sent or received across the internet or a local network. IPv4 is the 
 fourth version, IPv6 is newer and not fully adopted. In IPv4, the network ID 192.168.subnetwork.device denotes a range 
 of IP addresses for private use within local networks to communicate. Public addresses do not start with 192.168.
 
After you log into a computer, the code below summarizes the network interfaces. An interface in this context 
refers to hardware and software components that allow a device to communicate over a network. 
{% highlight python linenos %}
import socket
import subprocess

def get_ip_addresses():
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    result = subprocess.run(['arp', '-a'], capture_output=True, text=True)  
    ip_list = [line for line in result.stdout.split('\n')]
    
    return ip_list

for ip in get_ip_addresses():
    print(ip)

ip_addresses = get_ip_addresses()
for ip in ip_addresses:
    print(ip)
{% endhighlight %}
Hardware Interface:
Network Interface Card (NIC): A physical hardware component, like an Ethernet card or Wi-Fi adapter, that connects a computer to a network.
Cables: Physical connections, such as Ethernet cables to link devices to a network.

Software Interface:
Network Interface: A software abstraction that represents the hardware interface in the operating system. It handles the communication protocols and data transfer.
Virtual Interfaces: Software-based interfaces, such as virtual network adapters used in virtual machines or VPN connections.

The interface is described as IP 192.168.1.5 and the hexadecimal 0x6 refers to the network interface. 
Physical address are the MAC addresses (Media Access Control from a device) that correspond to each IP. Type is the ARP entry.
MAC: Media Access Control, aims to reach the correct device when the data is sent over.  

**Dynamic IP:** if you unplug a device with dynamic IP, it might receive a different IP address after reconnecting  
**Static IP:** If you unplug printer and plug it back, it will still have same IP as long as the settings haven’t been changed  
e.g printers have a unique MAC address even if they are from the same brand and model.
{% highlight python linenos %}
Interface: 192.168.1.5 --- 0x6
  Internet Address      Physical Address      Type
  192.168.1.1           00-84-1e-76-26-b3     dynamic   
  192.168.2.3           e8-7c-25-50-b0-bt     static   
{% endhighlight %}  
Devices in different subnetworks have limited communication and typically require a router.
Multiple Network Interfaces: The presence of different hexadecimal identifiers suggests that your device has multiple network interfaces, each with its own IP address. This is common in systems with both wired and wireless connections, or in servers with multiple network cards.
Run ipconfig to see if the description of the Network Interface says Ethernet (wired) or WIFI (wireless).


You are able to communicate with other IPs within the same subnet/subnetwork as long as there are no firewall rules or policies blocking the communication.
Even if IP addresses are assigned to the same physical interface, they might not be able to communicate directly if they belong to different subnets. To achieve that you would need 
Routing Configuration, subnet mask adjustment and firewall rules. The ability of the IP addresses to interact depends on how the network is configured due to mainly security and group considerations.


Listing all IPs within an interface typically shows the IP addresses that have been assigned to devices on that network. 
It doesn’t mean that all those IPs are currently connected or active.

**Active Devices:** devices currently connected to network and actively using their assigned IPs  
**Inactive Devices:** devices that were previously connected and had an IP address assigned but are currently disconnected or turned off   
**Reserved IPs:** Some IP addresses might be reserved for specific devices or purposes but are not currently in use  
**Expired Leases:** In networks using DHCP (Dynamic Host Configuration Protocol), IP addresses are leased for a specific period. If a device disconnects, its lease might expire, but the IP address could still appear in listings until the lease is fully cleared  
**Static IPs:** Some devices might have static IP addresses assigned, which remain reserved for them even if they are not currently connected  

Below indicates all packets were sent and received successfully, with 0% packet loss, indicating a good connection. (ACTIVE DEVICE)
{% highlight python linenos %}
Pinging 192.168.1.195 with 32 bytes of data:
Reply from 192.168.1.195: bytes=32 time=9ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128

Ping statistics for 192.168.1.195:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 2ms, Maximum = 9ms, Average = 3ms
{% endhighlight %}

Below indicates you send 4 packets, and you received 4 responses, but the responses were “Destination host unreachable.” This means that while the network path to the destination was reachable (hence no packet loss), the specific device at 192.168.1.13 could not be reached. 
The “Destination host unreachable” message is coming from another device (192.168.1.5) on the network, indicating that it couldn’t find the host you were trying to ping.
So, 0% packet loss here means that the network is functioning, but the specific device you’re trying to reach is not available. (LIKELY INACTIVE DEVICE)

{% highlight python linenos %}
Pinging 192.168.1.13 with 32 bytes of data:
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.

Ping statistics for 192.168.1.13:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
{% endhighlight %}

<div data-lang="es">
<p>El entrenamiento distribuido consiste en partir la carga de trabajo entre varias unidades de procesamiento para acelerar el entrenamiento, en especial en aprendizaje automático.</p>
<p>Las direcciones IP son etiquetas únicas asignadas a cada dispositivo en una red. Gobiernan cómo se envían y reciben datos en internet o en una red local. IPv4 es la cuarta versión; IPv6 es más reciente y no está plenamente adoptada. En IPv4, el identificador de red 192.168.subred.dispositivo denota un rango de direcciones privadas para uso interno. Las direcciones públicas no empiezan por 192.168.</p>
<p>Tras iniciar sesión en un equipo, el código siguiente resume las interfaces de red. Una interfaz, en este contexto, es el hardware y el software que permiten a un dispositivo comunicarse en red.</p>
{% highlight python linenos %}
import socket
import subprocess

def get_ip_addresses():
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    result = subprocess.run(['arp', '-a'], capture_output=True, text=True)  
    ip_list = [line for line in result.stdout.split('\n')]
    
    return ip_list

for ip in get_ip_addresses():
    print(ip)

ip_addresses = get_ip_addresses()
for ip in ip_addresses:
    print(ip)
{% endhighlight %}
<p><strong>Interfaz de hardware:</strong> la NIC (tarjeta Ethernet o adaptador Wi‑Fi) conecta el equipo a la red. Los cables, por ejemplo Ethernet, enlazan dispositivos.</p>
<p><strong>Interfaz de software:</strong> abstracción del hardware en el sistema operativo. Maneja protocolos y transferencia de datos. También hay interfaces virtuales, como adaptadores en máquinas virtuales o VPN.</p>
<p>La interfaz se describe como IP 192.168.1.5 y el hexadecimal 0x6 identifica la interfaz de red. Las direcciones físicas son MAC de cada IP. Type es la entrada ARP. MAC (Media Access Control) permite alcanzar el dispositivo correcto cuando se envían datos.</p>
<p><strong>IP dinámica:</strong> si se desconecta un dispositivo con IP dinámica, al reconectar puede recibir otra dirección.<br>
<strong>IP estática:</strong> si se desconecta una impresora y se vuelve a conectar, conserva la misma IP mientras no cambien los ajustes. Las impresoras tienen MAC única aunque sean de la misma marca y modelo.</p>
{% highlight python linenos %}
Interface: 192.168.1.5 --- 0x6
  Internet Address      Physical Address      Type
  192.168.1.1           00-84-1e-76-26-b3     dynamic   
  192.168.2.3           e8-7c-25-50-b0-bt     static   
{% endhighlight %}
<p>Dispositivos en distintas subredes tienen comunicación limitada y suelen requerir un router. Varios identificadores hexadecimales sugieren múltiples interfaces de red, habitual en equipos con cable e inalámbrico o en servidores con varias tarjetas. Ejecute ipconfig para ver si la descripción dice Ethernet (cable) o WIFI.</p>
<p>Se puede comunicar con otras IP de la misma subred si no hay firewall ni políticas que lo bloqueen. Aunque las IP estén asignadas a la misma interfaz física, no se comunican de forma directa si pertenecen a subredes distintas. Haría falta enrutamiento, ajuste de máscara y reglas de firewall. La capacidad de interactuar depende de cómo esté configurada la red, sobre todo por seguridad y agrupación.</p>
<p>Listar todas las IP de una interfaz muestra las direcciones asignadas a dispositivos de esa red. No significa que todas estén conectadas o activas.</p>
<p><strong>Dispositivos activos:</strong> conectados y usando su IP.<br>
<strong>Inactivos:</strong> estuvieron conectados pero ahora están desconectados o apagados.<br>
<strong>IP reservadas:</strong> reservadas para un dispositivo o propósito, no necesariamente en uso.<br>
<strong>Arrendamientos vencidos:</strong> en redes DHCP las IP se arriendan por un periodo; al desconectar, el arriendo puede vencer pero la IP sigue apareciendo hasta limpiarse.<br>
<strong>IP estáticas:</strong> permanecen reservadas aunque el dispositivo no esté conectado.</p>
<p>Lo siguiente indica que todos los paquetes se enviaron y recibieron, con 0% de pérdida: buena conexión (dispositivo activo).</p>
{% highlight python linenos %}
Pinging 192.168.1.195 with 32 bytes of data:
Reply from 192.168.1.195: bytes=32 time=9ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128
Reply from 192.168.1.195: bytes=32 time=2ms TTL=128

Ping statistics for 192.168.1.195:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 2ms, Maximum = 9ms, Average = 3ms
{% endhighlight %}
<p>Lo siguiente indica 4 paquetes enviados y 4 respuestas, pero las respuestas fueron “Destination host unreachable”. La ruta de red era alcanzable (sin pérdida de paquetes), pero el dispositivo en 192.168.1.13 no. El mensaje viene de otro dispositivo (192.168.1.5) que no encontró el host. 0% de pérdida aquí significa que la red funciona, pero el dispositivo buscado no está disponible (probablemente inactivo).</p>
{% highlight python linenos %}
Pinging 192.168.1.13 with 32 bytes of data:
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.
Reply from 192.168.1.5: Destination host unreachable.

Ping statistics for 192.168.1.13:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
{% endhighlight %}
</div>