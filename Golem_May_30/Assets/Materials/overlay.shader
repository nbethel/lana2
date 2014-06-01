Shader "Custom/tattoo" {
Properties {
_Color ("Main Color", Color) = (1,1,1,1)
_MainTex ("Texture", 2D) = "white" {}
_Tattoo ("Tattoo (RGBA)",2D) = "white" {}
}

SubShader {
Tags { "RenderType" = "Opaque" }
CGPROGRAM
#pragma surface surf Lambert 

struct Input {
float2 uv_MainTex;
float2 uv_BumpMap;
};

sampler2D _MainTex;
sampler2D _Tattoo;
fixed4 _Color;

void surf (Input IN, inout SurfaceOutput o) 
{
fixed4 basecol = tex2D (_MainTex, IN.uv_MainTex);
fixed4 tatcol = tex2D (_Tattoo, IN.uv_MainTex);
o.Albedo = basecol * _Color * tatcol;
o.Alpha = basecol.a;
}
ENDCG
}
Fallback "Diffuse"
}